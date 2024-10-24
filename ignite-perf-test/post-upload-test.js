import http from 'k6/http';
import { check } from 'k6';

export let options = {
  scenarios: {
    constant_load: {
      executor: 'constant-vus',
      vus: 1000,           // 동시에 유지할 가상 사용자 수
      duration: '5m',      // 테스트 지속 시간 (5분)
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'],  // 실패율 1% 이하
    http_req_duration: ['p(95)<500'], // 95% 응답이 500ms 이하
  },
};

export default function () {
  const apiUrl = "http://localhost:3000/api/posts";
  // const apiUrl = "http://localhost:8080/api/posts";
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: "60s",
  };

  const payload = JSON.stringify({
    title: "Test" + __VU,
    content: "Test" + __VU,
  });

  const res = http.post(apiUrl, payload, params);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  // 실행 시간 출력
  const currentTime = new Date().toISOString();
  console.log(`Request time: ${currentTime}`);
}
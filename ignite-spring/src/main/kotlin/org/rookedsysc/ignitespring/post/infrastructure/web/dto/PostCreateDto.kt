package org.rookedsysc.ignitespring.post.infrastructure.web.dto

import jakarta.validation.constraints.Max
import jakarta.validation.constraints.NotEmpty

data class PostCreateDto(
    @field:Max(50, message = "제목은 50자를 넘을 수 없음")
    @field:NotEmpty(message = "제목은 필수")
    val title: String,
    @field:NotEmpty(message = "내용은 필수")
    val content: String
)

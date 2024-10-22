package org.rookedsysc.ignitespring.post.infrastructure.web.dto

import jakarta.validation.constraints.Max
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.Size

data class PostCreateDto(
    //! Max로 검증하면 Byte 사이즈로 검증함
    @field:Size(max = 50, message = "제목은 50자를 넘을 수 없음")
    @field:NotEmpty(message = "제목은 필수")
    val title: String,
    @field:NotEmpty(message = "내용은 필수")
    val content: String
)

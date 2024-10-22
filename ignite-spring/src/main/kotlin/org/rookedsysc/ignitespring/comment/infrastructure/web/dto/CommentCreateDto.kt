package org.rookedsysc.ignitespring.comment.infrastructure.web.dto

import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.Size

/**
 * 코드 중복을 줄일수도 있겠지만 이해를 돕기 위해 별도로 작성
 */
data class CommentCreateDto(
    //! Max로 검증하면 Byte 사이즈로 검증함
    @field:Size(max = 50, message = "제목은 50자를 넘을 수 없음")
    @field:NotEmpty(message = "제목은 필수")
    val title: String,
    @field:NotEmpty(message = "내용은 필수")
    val content: String
)

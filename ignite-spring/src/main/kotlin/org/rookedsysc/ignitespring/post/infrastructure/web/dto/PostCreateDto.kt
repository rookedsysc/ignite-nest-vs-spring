package org.rookedsysc.ignitespring.post.infrastructure.web.dto

import jakarta.validation.constraints.Max
import jakarta.validation.constraints.NotEmpty

data class PostCreateDto(
    @field:Max(50)
    @field:NotEmpty
    val title: String,
    @field:NotEmpty
    val content: String
)

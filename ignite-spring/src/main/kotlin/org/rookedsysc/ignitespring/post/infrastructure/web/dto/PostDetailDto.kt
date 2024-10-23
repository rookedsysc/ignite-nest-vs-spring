package org.rookedsysc.ignitespring.post.infrastructure.web.dto

import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentPostDetailListDto
import java.util.Date

data class PostDetailDto(
    val id: Long,
    val title: String,
    val content: String,
    val createdAt: Date,
    val postDetailListDto: List<CommentPostDetailListDto>
) {}

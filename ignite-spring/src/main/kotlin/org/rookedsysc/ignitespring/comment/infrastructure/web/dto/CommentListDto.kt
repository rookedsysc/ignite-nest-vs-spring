package org.rookedsysc.ignitespring.comment.infrastructure.web.dto

import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostListDto
import java.util.Date

data class CommentListDto(
    val id: Long,
    val title: String,
    val content: String,
    val createdAt: Date,
    val postListDto: PostListDto
) {}

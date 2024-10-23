package org.rookedsysc.ignitespring.comment.infrastructure.web.dto

import java.util.Date

/**
 * Post Detail API에 사용되는 Comment List DTO
 */
data class CommentPostDetailListDto(
    val id: Long,
    val title: String,
    val content: String,
    val createdAt: Date,
) {}

package org.rookedsysc.ignitespring.post.infrastructure.web.dto

import java.util.Date

/**
 * 댓글 목록조회에 들어갈 게시물 요약 정보
 */
data class PostListDto (
    val id: Long,
    val title: String,
    val commentCount: Int,
    val createAt: Date
) {}

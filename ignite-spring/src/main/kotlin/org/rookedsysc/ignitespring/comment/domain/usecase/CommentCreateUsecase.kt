package org.rookedsysc.ignitespring.comment.domain.usecase

import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto

interface CommentCreateUsecase {
    fun createComment(postCreateDto: PostCreateDto): Unit
}

package org.rookedsysc.ignitespring.comment.domain.usecase

import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto

interface CommentListUsecase {
    fun execute(): List<CommentListDto>
}

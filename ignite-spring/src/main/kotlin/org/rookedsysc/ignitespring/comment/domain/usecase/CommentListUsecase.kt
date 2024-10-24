package org.rookedsysc.ignitespring.comment.domain.usecase

import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto
import org.springframework.data.domain.Pageable

interface CommentListUsecase {
    fun execute(request: Pageable): List<CommentListDto>
}

package org.rookedsysc.ignitespring.post.domain.usecase

import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostDetailDto

interface PostDetailUsecase {
    fun execute(postId: Long): PostDetailDto
}

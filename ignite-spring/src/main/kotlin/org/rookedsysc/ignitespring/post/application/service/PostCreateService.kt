package org.rookedsysc.ignitespring.post.application.service

import org.rookedsysc.ignitespring.post.domain.port.out.PostOutPort
import org.rookedsysc.ignitespring.post.domain.usecase.PostCreateUsecase
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.rookedsysc.ignitespring.post.mapper.PostMapper

class PostCreateService(
    private val postOutPort: PostOutPort
) : PostCreateUsecase {
    override fun execute(postCreateDto: PostCreateDto): Unit {
        val post: PostEntity = PostMapper.toEntity(postCreateDto)
        postOutPort.save(post)
    }
}

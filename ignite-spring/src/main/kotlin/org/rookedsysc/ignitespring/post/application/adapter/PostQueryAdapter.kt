package org.rookedsysc.ignitespring.post.application.adapter

import org.rookedsysc.ignitespring.post.domain.port.`in`.PostInPort
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.repository.PostRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Repository

@Repository
class PostQueryAdapter(
    private val postRepository: PostRepository
): PostInPort {

    override fun getPostByIdOrThrow(postId: Long): PostEntity {
        return postRepository.findById(postId).orElseThrow { throw NotFoundException() }
    }
}

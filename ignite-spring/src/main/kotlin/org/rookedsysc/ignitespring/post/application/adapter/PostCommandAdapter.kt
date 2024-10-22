package org.rookedsysc.ignitespring.post.application.adapter

import org.rookedsysc.ignitespring.post.domain.port.out.PostOutPort
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.repository.PostRepository
import org.springframework.stereotype.Repository

@Repository
class PostCommandAdapter(
    private val postRepository: PostRepository,
): PostOutPort {

    override fun save(post: PostEntity): PostEntity {
        return postRepository.save(post)
    }
}

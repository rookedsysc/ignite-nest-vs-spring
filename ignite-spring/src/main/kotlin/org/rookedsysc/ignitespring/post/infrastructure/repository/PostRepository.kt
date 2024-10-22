package org.rookedsysc.ignitespring.post.infrastructure.repository

import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.springframework.data.jpa.repository.JpaRepository
import java.util.Optional

interface PostRepository: JpaRepository<PostEntity, Long> {
    override fun findById(id: Long): Optional<PostEntity>
}

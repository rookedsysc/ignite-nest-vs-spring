package org.rookedsysc.ignitespring.post.infrastructure.repository

import org.rookedsysc.ignitespring.post.domain.port.out.PostOutPort
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.springframework.data.jpa.repository.JpaRepository

interface PostRepository: PostOutPort, JpaRepository<PostEntity, Long> {}

package org.rookedsysc.ignitespring.comment.infrastructure.repository

import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.springframework.data.jpa.repository.JpaRepository

interface CommentRepository: JpaRepository<CommentEntity, Long> {
}

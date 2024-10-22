package org.rookedsysc.ignitespring.comment.domain.port.out

import org.rookedsysc.ignitespring.comment.entity.CommentEntity

interface CommentOutPort {
    fun createComment(comment: CommentEntity): CommentEntity
}

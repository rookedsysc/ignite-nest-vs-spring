package org.rookedsysc.ignitespring.comment.domain.port.`in`

import org.rookedsysc.ignitespring.comment.entity.CommentEntity

interface CommentInPort {
    fun findAllCommentList(): List<CommentEntity>
}

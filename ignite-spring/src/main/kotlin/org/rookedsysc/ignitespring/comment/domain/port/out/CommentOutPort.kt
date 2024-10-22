package org.rookedsysc.ignitespring.comment.domain.port.out

import javax.xml.stream.events.Comment

interface CommentOutPort {
    fun createComment(comment: Comment): Comment
}

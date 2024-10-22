package org.rookedsysc.ignitespring.post.domain.port.`in`

import org.rookedsysc.ignitespring.post.entity.PostEntity

interface PostInPort {
    fun getPostByIdOrThrow(postId: Long): PostEntity
}

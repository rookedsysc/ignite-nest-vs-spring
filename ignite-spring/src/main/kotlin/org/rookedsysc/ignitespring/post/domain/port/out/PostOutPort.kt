package org.rookedsysc.ignitespring.post.domain.port.out

import org.rookedsysc.ignitespring.post.entity.PostEntity

interface PostOutPort {
    fun save(post: PostEntity): PostEntity
}

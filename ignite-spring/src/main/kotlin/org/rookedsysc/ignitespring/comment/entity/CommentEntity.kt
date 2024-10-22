package org.rookedsysc.ignitespring.comment.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import org.rookedsysc.ignitespring.common.entity.BaseEntity

@Entity(name = "comment")
class CommentEntity(
    @Column(name = "post_id", nullable = false)
    var postId: Long,

    @Column(columnDefinition = "varchar(50)", length = 50, nullable = false)
    var title: String,

    @Column(columnDefinition = "text", nullable = false)
    var content: String,
    ) : BaseEntity(
) {}

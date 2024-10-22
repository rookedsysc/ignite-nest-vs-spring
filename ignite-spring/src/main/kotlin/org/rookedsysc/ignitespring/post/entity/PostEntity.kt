package org.rookedsysc.ignitespring.post.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import org.rookedsysc.ignitespring.common.entity.BaseEntity

@Entity
class PostEntity(title: String, content: String) : BaseEntity() {
    @Column(columnDefinition = "varchar(50)", length = 50, nullable = false)
    var title: String = ""
    @Column(columnDefinition = "text", nullable = false)
    var content: String = ""
    @Column(name = "comment_count", nullable = false)
    var commentCount: Int = 0
}

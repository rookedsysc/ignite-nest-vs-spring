package org.rookedsysc.ignitespring.common.entity

import jakarta.persistence.Column
import jakarta.persistence.EntityListeners
import jakarta.persistence.Id
import jakarta.persistence.MappedSuperclass
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.util.Date

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
class BaseEntity {
    @Id
    var id: Long = 0L

    @CreatedDate
    @Column(name = "created_at")
    var createdAt: Date = Date(),

    @LastModifiedDate
    @Column(name = "updated_at")
    var updatedAt: Date = Date(),
}

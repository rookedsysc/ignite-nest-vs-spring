package org.rookedsysc.ignitespring

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
class IgniteSpringApplication

fun main(args: Array<String>) {
    runApplication<IgniteSpringApplication>(*args)
}

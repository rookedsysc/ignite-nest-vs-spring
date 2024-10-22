package org.rookedsysc.ignitespring

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class IgniteSpringApplication

fun main(args: Array<String>) {
    runApplication<IgniteSpringApplication>(*args)
}

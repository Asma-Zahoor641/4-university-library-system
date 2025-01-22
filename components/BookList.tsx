'use client'
import React from 'react'
import BookCard from './BookCard'

interface props {
  title: string
  books: Book[]
  containerClassName?: string
}

const BookList = ({title, books , containerClassName}:props) => {
  return (
    <section className={containerClassName} >
      <h2 className=' font-bebas-neue text-4xl text-light-100'>{title}</h2>

      <ul className='book-list  flex  items-center justify-around gap-5'>
        {books.map((book) => (
          <BookCard key={book.title} {...book}/>
        )
          
        )}
      </ul>
    </section>
  )
}

export default BookList
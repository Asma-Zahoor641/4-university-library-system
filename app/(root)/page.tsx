import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
// import { db } from "@/database/drizzle";
// import { users } from "@/database/schema";

const Home = async ()=> {
  // const result = await db.select().from(users);
  // console.log( JSON.stringify (result , null , 2) );
  
return(
  <> 
      {/* <BookOverview  cover={""} createdAt={null} isLoanedBook={false} {...sampleBooks[0]} /> */}

     <BookOverview {...sampleBooks[0]} />

     <BookList 
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
     />

  </>
  );
  };


export default Home; 

// import BookList from "@/components/BookList";
// import BookOverview from "@/components/BookOverview";
// import { db } from "@/database/drizzle";
// import { books, users } from "@/database/schema";
// import { auth } from "@/auth";
// import { desc } from "drizzle-orm";

// const Home = async () => {
//   const session = await auth();

//   const latestBooks = (await db
//     .select()
//     .from(books)
//     .limit(10)
//     .orderBy(desc(books.createdAt))) as Book[];

//   return (
//     <>
//       <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />

//       <BookList
//         title="Latest Books"
//         books={latestBooks.slice(1)}
//         containerClassName="mt-28"
//       />
//     </>
//   );
// };

// export default Home;
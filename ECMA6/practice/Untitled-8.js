// {
//     let a = 10
//     {
//       const b = 20
//       console.log(b)
//     }
//     console.log(a)
//     console.log(b)
//   }
//   console.log(a)

{
  console.log(a);
  let a = 10;
  {
    console.log(b);
    let b = 20;
  }
}

{
  console.log(a);
  const a = 10;
  {
    console.log(b);
    const b = 20;
  }
}

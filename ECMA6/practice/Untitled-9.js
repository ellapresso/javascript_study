// {
//     let a = 10
//     {
//       console.log(a)
//       let a = 20
//     }
//   }

{
  const a = 10;
  console.log(a);
  {
    console.log(a);
    const a = 20;
    console.log(a);
  }
}

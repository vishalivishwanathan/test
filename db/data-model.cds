namespace my.bookshop;


entity Books {
  key ID : Integer;
  title  : localized String;
  author : String;
  stock  : Integer;
}
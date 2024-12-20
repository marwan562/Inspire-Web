const text = (text:string,foo:string) => {
   return text.split("").map((char, index) => (
        <span key={index} className={foo + " text-base sm:text-lg md:text-xl lg:text-2xl"}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
}

export const chars = (title: string) => {
  return text(title,"chars")
};

export const parag = (parag:string) => {
  return text(parag,"parag")
};

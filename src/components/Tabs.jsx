function Tabs() {
  return (
    <ul className="bg-background-gray/30 border-secondary/30 flex gap-6 rounded-lg border px-2 py-2">
      <li className="text-primary outline-secondary/30 hover:bg-secondary rounded-lg bg-white px-10 py-2 text-[1.125rem] font-bold tracking-[-0.5px] outline">
        Houses
      </li>
      <li className="text-font-gray hover:text-primary rounded-lg px-10 py-2 text-[1.125rem] font-medium tracking-[-0.5px]">
        Apartments
      </li>
    </ul>
  );
}

export default Tabs;

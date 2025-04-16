function Tabs() {
  return (
    <div className="bg-background-gray/30 border-secondary/30 flex gap-6 rounded-lg border px-2 py-2">
      <button className="tab-active">Houses</button>
      <button className="tab-nonactive">Apartments</button>
    </div>
  );
}

export default Tabs;

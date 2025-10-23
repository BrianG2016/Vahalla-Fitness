export default function Progress() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Temple of Progress</h2>
      <p>Upload your progress image to carve your rune of honor.</p>
      <input type="file" className="mt-2" />
      <button className="block mt-3 bg-gold text-stone px-3 py-1 rounded">Submit Proof</button>
    </div>
  )
}
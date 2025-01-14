import { useState } from 'react';
const ProductSpecs = () => {
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (index: number) => {
      setTabValue(index);
    };
  return (
    <section className='py-4'>
    <div className="container">
      {/* Tabs */}
      <ul className='flex items-center gap-6'>
        <li>
          <button onClick={() => handleTabChange(0)}>Description</button>
        </li>
        <li>
          <button onClick={() => handleTabChange(1)}>Additional Information</button>
        </li>
        <li>
          <button onClick={() => handleTabChange(2)}>Reviews [5]</button>
        </li>
      </ul>
      {/* Contents */}
      <div>
        {/* Tab */}
        {tabValue === 0 && (<div>
          <h4>tab 1</h4>
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>)}

        {/* Tab */}
        {tabValue === 1 && (
          <div>
            <h4>tab 2</h4>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        )}

        {/* Tab */}
        {tabValue === 2 && (<div>
          <h4>tab 3</h4>
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>)}

      </div>
    </div>
  </section>
  )
}

export default ProductSpecs
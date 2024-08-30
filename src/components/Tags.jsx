export default function Tags({tags}) {
    
  return (
        <div className="tags">
            {tags?.map((tag, index) => (
              <span className='tag-text' key={index}>{tag}</span>
            ))}
        </div>
    );
};
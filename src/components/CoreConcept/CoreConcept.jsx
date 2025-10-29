import './CoreConcept.css'
export default function CoreConcept({title,description,image})
{
  return (
    <li>
      <img src={image} alt={title} width="200px" height="200px"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
 }
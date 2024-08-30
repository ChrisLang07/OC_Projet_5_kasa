export default function Host({host}) {
    const hostInfos = host
  
    return (
        <div className="profile">
          <h3 className="profile-name">{hostInfos.name}</h3>
          <img className='profile-pic' src={hostInfos.picture} alt={host.name} />
        </div>
    )
}
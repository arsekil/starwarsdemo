import { NavLink, NavLinkRenderProps } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <NavLink to="/">
          <img src="/starwars_logo.png" alt="Star Wars Logo" width="113" height="50" />
        </NavLink>
      </div>
      <div className="navbar_nav">
        <NavLink to="/episodes" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/episode_active.png' : '/navbar/episode.png'}
                alt="Episodes Icon"
                width="18"
                height="20"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Episodes</span>
            </>
          )}
        </NavLink>
        <NavLink to="/characters" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/character_active.png' : '/navbar/character.png'}
                alt="Characters Icon"
                width="21"
                height="20"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Characters</span>
            </>
          )}
        </NavLink>
        <NavLink to="/planets" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/planet_active.png' : '/navbar/planet.png'}
                alt="Planets Icon"
                width="22"
                height="14"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Planets</span>
            </>
          )}
        </NavLink>
        <NavLink to="/species" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/species_active.png' : '/navbar/species.png'}
                alt="Species Icon"
                width="16"
                height="22"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Species</span>
            </>
          )}
        </NavLink>
        <NavLink to="/vehicles" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/vehicle_active.png' : '/navbar/vehicle.png'}
                alt="Vehicles Icon"
                width="22"
                height="19"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Vehicles</span>
            </>
          )}
        </NavLink>
        <NavLink to="/starships" className="nav_item">
          {({ isActive }: NavLinkRenderProps) => (
            <>
              <img
                src={isActive ? '/navbar/starship_active.png' : '/navbar/starship.png'}
                alt="Starships Icon"
                width="22"
                height="21"
              />
              <span className={isActive ? 'nav_item-active' : 'nav_item-inactive'}>Starships</span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  )
}

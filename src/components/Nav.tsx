import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
			<li><NavLink to="/promises">Promises</NavLink></li>
			<li><NavLink to="/promise-all">Promise.all</NavLink></li>
			<li><NavLink to="/promise-all-settled">Promise.allSettled</NavLink></li>
			<li><NavLink to="/promise-race">Promise.race</NavLink></li>
			<li><NavLink to="/promise-any">Promise.any</NavLink></li>
			<li><NavLink to="/hooks">Hooks</NavLink></li>
			<li><NavLink to="/typeScript">TypeScript</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};

###Global navigation:

	@example
	<h4>EN version</h4>
	<h5>Logged out state</h5>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">
					powered by
				</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>

			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-games">Games</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-movies">Movies</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-tv">TV</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width">Wikis</a>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<a href="#" class="wds-global-navigation__content-item wds-global-navigation__account-navigation">My Account</a>
				<a href="#" class="wds-button wds-is-squished wds-global-navigation__start-a-wiki wds-is-secondary">Start a wiki</a>
			</div>
		</div>
	</div>

	<h5>Logged in state</h5>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">
					powered by
				</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>

			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-games">Games</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-movies">Movies</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width wds-is-tv">TV</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-fixed-width">Wikis</a>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<a href="#" class="wds-global-navigation__content-item wds-has-multiple-subitems">
					<img src="./assets/avatar.jpg" class="wds-avatar wds-is-circle wds-is-padded-right" alt="user name"/>
					<svg class="wds-icon wds-icon-tiny" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</a>
				<a href="#" class="wds-global-navigation__content-item wds-has-multiple-subitems wds-global-navigation__notifications">
					<div class="wds-global-navigation__notifications-counter-wrapper">
						<div class="wds-global-navigation__notifications-counter">3</div>
					</div>
					<svg class="wds-icon wds-icon-small" alt="notifications">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-bell"></use>
					</svg>
					<svg class="wds-icon wds-icon-tiny" alt="notifications dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</a>
				<a href="#" class="wds-button wds-is-squished wds-global-navigation__start-a-wiki wds-is-secondary">Start a wiki</a>
			</div>
		</div>
	</div>

	<h5>Dropdowns</h5>
	<div class="wds-dropdown wds-is-active">
		<div class="wds-dropdown-toggle">
			<span>Pretty wide entrypoint</span>
			<svg class="wds-icon wds-dropdown-toggle-chevron">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown">
			</svg>
		</div>
		<div class="wds-dropdown-content wds-my-account-dropdown">
			<ul class="wds-list wds-has-lines-between">
				<li><button class="wds-button">SIGN IN</button></li>
				<li>
					<div class="wds-text">Don't have an account?</div>
					<button class="wds-button wds-is-secondary">REGISTER</button>
				</li>
			</ul>
		</div>
	</div>

	<div class="wds-dropdown wds-is-active">
		<div class="wds-dropdown-toggle">
			<span>Pretty wide entrypoint</span>
			<svg class="wds-icon wds-dropdown-toggle-chevron">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown">
			</svg>
		</div>
		<div class="wds-dropdown-content wds-list-dropdown">
			<ul class="wds-list">
				<li><a href="#">Explore Wikis</a></li>
				<li><a href="#">Community Central</a></li>
			</ul>
		</div>
	</div>

	<div class="wds-dropdown wds-is-active">
		<div class="wds-dropdown-toggle">
			<span>Pretty wide entrypoint</span>
			<svg class="wds-icon wds-dropdown-toggle-chevron">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown">
			</svg>
		</div>
		<div class="wds-dropdown-content wds-list-dropdown">
			<ul class="wds-list">
				<li><a href="#">View Profile</a></li>
				<li><a href="#">My Talk</a></li>
				<li><a href="#">My Preferences</a></li>
				<li><a href="#">Help</a></li>
				<li><a href="#">Sign Out</a></li>
			</ul>
		</div>
	</div>

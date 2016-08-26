###Global navigation:

	@example
	<h4>EN version</h4>
	<h5>Logged out state</h5>
	<div class="wds-global-navigation sg-has-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">powered by</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<a href="#" class="wds-global-navigation__content-item wds-is-games">Games</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-movies">Movies</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-tv">TV</a>
				<div class="wds-global-navigation__content-item wds-dropdown wds-is-active">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<span>Wikis</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list">
							<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
						</ul>
					</div>
				</div>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<div class="wds-global-navigation__content-item wds-global-navigation__account-navigation wds-dropdown wds-is-active">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<svg class="wds-icon wds-icon-small wds-icon wds-global-navigation__user-icon" alt="user icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
						</svg>
						<span class="wds-global-navigation__account-navigation-caption">My Account</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list wds-has-lines-between">
							<li><button class="wds-button wds-is-full-width">Sign in</button></li>
							<li>
								<div class="wds-global-navigation__register-button-caption">Don't have an account?</div>
								<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
							</li>
						</ul>
					</div>
				</div>
				<a href="#" class="wds-button wds-is-squished wds-is-secondary wds-global-navigation__start-a-wiki">
					<span class="wds-global-navigation__start-a-wiki-content">Start a wiki</span>
				</a>
			</div>
		</div>
	</div>

	<h5>Logged in state</h5>
	<div class="wds-global-navigation sg-has-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">powered by</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<a href="#" class="wds-global-navigation__content-item wds-is-games">Games</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-movies">Movies</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-tv">TV</a>
				<div class="wds-global-navigation__content-item wds-dropdown wds-is-active">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<span>Wikis</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list">
							<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
						</ul>
					</div>
				</div>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<div class="wds-global-navigation__content-item wds-dropdown wds-is-active wds-global-navigation__user-menu">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<img src="./assets/avatar.jpg" class="wds-avatar wds-is-circle" alt="user name"/>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list">
							<li><a href="#" class="wds-global-navigation__dropdown-link">View Profile</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">My Talk</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">My Preferences</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Help</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Sign Out</a></li>
						</ul>
					</div>
				</div>
				<div class="wds-global-navigation__content-item wds-global-navigation__notifications">
					<div class="wds-global-navigation__notifications-counter">3</div>
					<svg class="wds-icon wds-icon-small" alt="notifications">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-bell"></use>
					</svg>
					<svg class="wds-icon wds-icon-tiny" alt="notifications dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<a href="#" class="wds-button wds-is-squished wds-is-secondary wds-global-navigation__start-a-wiki">
					<span class="wds-global-navigation__start-a-wiki-content">Start a wiki</span>
				</a>
			</div>
		</div>
	</div>

	<h4>DE version</h4>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">powered by</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<a href="#" class="wds-global-navigation__content-item wds-is-games">Videospiele</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-movies">Filme</a>
				<a href="#" class="wds-global-navigation__content-item wds-is-tv">TV</a>
				<div class="wds-global-navigation__content-item wds-dropdown">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<span>Wikis</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href= "#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list">
							<li><a href="#" class="wds-global-navigation__dropdown-link">Beliebteste Wikis</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Community Deutschland</a></li>
						</ul>
					</div>
				</div>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<div class="wds-global-navigation__content-item wds-global-navigation__account-navigation wds-dropdown">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<svg class="wds-icon wds-icon-small wds-icon wds-global-navigation__user-icon" alt="user icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
						</svg>
						<span class="wds-global-navigation__account-navigation-caption">Mein Benutzerkonto</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list wds-has-lines-between">
							<li><button class="wds-button wds-is-full-width">Anmelden</button></li>
							<li>
								<span class="wds-global-navigation__register-button-caption">Du hast kein konto?</span>
								<button class="wds-button wds-is-secondary wds-is-full-width">Registrieren</button>
							</li>
						</ul>
					</div>
				</div>
				<a href="#" class="wds-button wds-is-squished wds-is-secondary wds-global-navigation__start-a-wiki">
					<span class="wds-global-navigation__start-a-wiki-content">Starte ein Wiki</span>
				</a>
			</div>
		</div>
	</div>

	<h4>PL version</h4>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar row">
			<a href="#" class="wds-global-navigation__logo col-sm-4 col-md-3 col-lg-3">
				<svg class="wds-global-navigation__logo__fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo__powered-by">powered by</span>
				<svg class="wds-global-navigation__logo__wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<div class="col-sm-5 col-md-6 col-lg-6 wds-global-navigation__middle-column">
				<div class="wds-global-navigation__content-item wds-dropdown">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<span>Wikis</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href= "#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list">
							<li><a href="#" class="wds-global-navigation__dropdown-link">Popularne wiki</a></li>
							<li><a href="#" class="wds-global-navigation__dropdown-link">Centrum Społeczności</a></li>
						</ul>
					</div>
				</div>
				<div class="wds-global-navigation__search wds-global-navigation__content-item">Search placeholder</div>
			</div>
			<div class="col-sm-3 wds-global-navigation__right-column">
				<div class="wds-global-navigation__content-item wds-global-navigation__account-navigation wds-dropdown">
					<div class="wds-dropdown-toggle wds-global-navigation__dropdown-toggle">
						<svg class="wds-icon wds-icon-small wds-icon wds-global-navigation__user-icon" alt="user icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
						</svg>
						<span class="wds-global-navigation__account-navigation-caption">Moje konto</span>
						<svg class="wds-icon wds-icon-tiny wds-dropdown-toggle-chevron" alt="user dropdown">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
						</svg>
					</div>
					<div class="wds-dropdown-content wds-global-navigation__dropdown">
						<ul class="wds-list wds-has-lines-between">
							<li><button class="wds-button wds-is-full-width">Zaloguj się</button></li>
							<li>
								<span class="wds-global-navigation__register-button-caption">Nie masz jeszcze konta?</span>
								<button class="wds-button wds-is-secondary wds-is-full-width">Zarejestruj się</button>
							</li>
						</ul>
					</div>
				</div>
				<a href="#" class="wds-button wds-is-squished wds-is-secondary wds-global-navigation__start-a-wiki">
					<span class="wds-global-navigation__start-a-wiki-content">Utwórz wiki</span>
				</a>
			</div>
		</div>
	</div>

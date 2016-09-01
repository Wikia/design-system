###Global navigation:

	@example
	<h4>Navigation states:</h4>
	<h5>Branded links are visible, user is logged out</h5>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Games</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Movies</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Search"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">My Account</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Sign in</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Don't have an account?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary" >
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>Branded links are visible, user is logged in</h5>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Games</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Movies</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Search"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__user-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<img src="./assets/avatar.jpg" class="wds-avatar wds-is-circle" alt="user name"/>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">View Profile</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Talk</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Preferences</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Help</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Sign Out</a></li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__notifications-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<div class="wds-global-navigation__notifications-menu-counter">3</div>
					<svg class="wds-icon wds-icon-small" alt="notifications">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-bell"></use>
					</svg>
					<svg class="wds-icon wds-icon-tiny" alt="notifications dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki wds-user-is-logged-in">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>Branded links are hidden, user is logged out</h5>
	<div class="wds-global-navigation wds-search-is-always-visible">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link">Centrum Społeczności</a>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Szukaj"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">Moje konto</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Zaloguj się</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Nie masz jeszcze konta?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Zarejestruj się</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Utwórz a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>Branded links are hidden, user is logged in</h5>
	<div class="wds-global-navigation wds-search-is-always-visible">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link">Centrum Społeczności</a>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Szukaj"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__user-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<img src="./assets/avatar.jpg" class="wds-avatar wds-is-circle" alt="user name"/>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">View Profile</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Talk</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Preferences</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Help</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Sign Out</a></li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__notifications-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<div class="wds-global-navigation__notifications-menu-counter">3</div>
					<svg class="wds-icon wds-icon-small" alt="notifications">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-bell"></use>
					</svg>
					<svg class="wds-icon wds-icon-tiny" alt="notifications dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki wds-user-is-logged-in">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Utwórz a Wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h4>Dropdown menus:</h4>
	<h5>Wikis menu dropdown</h5>
	<div class="wds-global-navigation sg-has-small-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Videospiele</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Filme</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown wds-is-active">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href= "#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Beliebteste Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Deutschland</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Suche"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">Mein Benutzerkonto</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Anmelden</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Du hast kein konto?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Registrieren</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Starte ein Wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>My account menu dropdown</h5>
	<div class="wds-global-navigation sg-has-large-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Games</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Movies</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Search"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown wds-is-active">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">My Account</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Sign in</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Don't have an account?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary" >
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>User menu dropdown</h5>
	<div class="wds-global-navigation sg-has-large-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Games</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Movies</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Search"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__user-menu wds-dropdown wds-is-active">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<img src="./assets/avatar.jpg" class="wds-avatar wds-is-circle" alt="user name"/>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">View Profile</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Talk</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">My Preferences</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Help</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Sign Out</a></li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__notifications-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<div class="wds-global-navigation__notifications-menu-counter">3</div>
					<svg class="wds-icon wds-icon-small" alt="notifications">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-bell"></use>
					</svg>
					<svg class="wds-icon wds-icon-tiny" alt="notifications dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki wds-user-is-logged-in">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h4>Search states:</h4>
	<h5>Search collapsed</h5>
	<div class="wds-global-navigation">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link wds-is-games">Games</a>
			<a href="#" class="wds-global-navigation__link wds-is-movies">Movies</a>
			<a href="#" class="wds-global-navigation__link wds-is-tv">TV</a>
			<div class="wds-global-navigation__link wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<span>Wikis</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-global-navigation__dropdown-content">
					<ul class="wds-list">
						<li><a href="#" class="wds-global-navigation__dropdown-link">Explore Wikis</a></li>
						<li><a href="#" class="wds-global-navigation__dropdown-link">Community Central</a></li>
					</ul>
				</div>
			</div>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Search"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">My Account</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Sign in</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Don't have an account?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary" >
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>Search expanded</h5>
	<div class="wds-global-navigation wds-search-is-always-visible wds-search-is-active">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link">コミュニティセントラル</a>
			<form class="wds-global-navigation__search">
				<div class="wds-global-navigation__search-input-wrapper">
					<label class="wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="検索"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">プロフィール</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Sign in</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Don't have an account?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">WIKIをはじめよう</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<h5>Search expanded with search suggestions</h5>
	<div class="wds-global-navigation wds-search-is-active sg-has-medium-space-for-dropdowns">
		<div class="wds-global-navigation__content-bar">
			<a href="#" class="wds-global-navigation__logo">
				<svg class="wds-global-navigation__logo-fandom" alt="Fandom">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-fandom"></use>
				</svg>
				<span class="wds-global-navigation__logo-powered-by">powered by</span>
				<svg class="wds-global-navigation__logo-wikia" alt="Wikia">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-company-logo-wikia"></use>
				</svg>
			</a>
			<a href="#" class="wds-global-navigation__link">Centrum Społeczności</a>
			<form class="wds-global-navigation__search">
				<div class="wds-dropdown wds-global-navigation__search-input-wrapper wds-is-active">
					<label class="wds-dropdown__toggle wds-global-navigation__search-label">
						<svg class="wds-icon wds-icon-small" alt="Search">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-magnifying-glass"></use>
						</svg>
						<input class="wds-global-navigation__search-input" name="search" placeholder="Szukaj na Wookieepedia..." value="Star"/>
					</label>
					<button class="wds-button wds-is-text wds-global-navigation__search-close" type="button">
						<svg class="wds-icon wds-icon-small wds-global-navigation__search-close-icon" alt="Close">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross"></use>
						</svg>
					</button>
					<div class="wds-dropdown__content wds-global-navigation__search-suggestions">
						<ul class="wds-list wds-has-ellipsis">
							<li>
								<a href="#" class="wds-global-navigation__dropdown-link">
									<strong>Star</strong>&nbsp;Wars
								</a>
							</li>
							<li>
								<a href="#" class="wds-global-navigation__dropdown-link">
									<strong>Star</strong>&nbsp;Wars Battlefield
								</a>
							</li>
							<li>
								<a href="#" class="wds-global-navigation__dropdown-link">
									The New ‘Rogue One: A <strong>Star</strong>&nbsp;Wars Story’ Trailer Is Awesome And This Title Is Long
								</a>
							</li>
						</ul>
					</div>
				</div>
				<button class="wds-button wds-global-navigation__search-submit">
					<svg class="wds-icon wds-icon-small wds-global-navigation__search-submit-icon" alt="Search">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-arrow"></use>
					</svg>
				</button>
			</form>
			<div class="wds-global-navigation__account-menu wds-dropdown">
				<div class="wds-dropdown__toggle wds-global-navigation__dropdown-toggle">
					<svg class="wds-icon wds-icon-small wds-icon" alt="user icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-user"></use>
					</svg>
					<span class="wds-global-navigation__account-menu-caption">My Account</span>
					<svg class="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" alt="user dropdown">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-dropdown-tiny"></use>
					</svg>
				</div>
				<div class="wds-dropdown__content wds-is-right-aligned wds-global-navigation__dropdown-content">
					<ul class="wds-list wds-has-lines-between">
						<li><button class="wds-button wds-is-full-width">Sign in</button></li>
						<li>
							<div class="wds-global-navigation__account-menu-dropdown-caption">Don't have an account?</div>
							<button class="wds-button wds-is-secondary wds-is-full-width">Register</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="wds-global-navigation__start-a-wiki">
				<a href="#" class="wds-button wds-is-squished wds-is-secondary">
					<span class="wds-global-navigation__start-a-wiki-caption">Start a wiki</span>
					<svg class="wds-global-navigation__start-a-wiki-icon wds-icon" alt="Start a wiki">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-plus"></use>
					</svg>
				</a>
			</div>
		</div>
	</div>

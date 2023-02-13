bootstrap: install-dev-deps

install-deps:
	@echo "[INFO] Installing dependencies"
	@cd frontend && yarn --production

install-dev-deps:
	@echo "[INFO] Installing dev dependencies"
	@cd frontend && yarn

format-src:
	@echo "[INFO] Formatting frontend source code using prettier"
	@cd frontend && yarn pretty

lint:
	@echo "[INFO] Linting frontend source code using eslint"
	@cd frontend && yarn lint

frontend-test:
	@echo "[INFO] Running frontend tests"
	@cd frontend && yarn test

build-frontend:
	@echo "[INFO] Deploying frontend to development environment"
	@cd frontend && yarn build
	
# в проекте возможно будут зависимости. Пожалуйста не забывайте подгружать их:)
install:
	@echo ">>>Start install dependencies"
	npm ci
	@echo ">>>dependencies installed successfully^^"

lint:
	@echo ">>>Getting started with lint"
	npx eslint .
	@echo ">>>WOW! You have a lot of mistakes/or no @_@"

fix:
	@echo ">>>Start fixing bugs"
	npx eslint --fix .
	@echo ">>>Your bugs was righted!"
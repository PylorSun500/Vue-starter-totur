FROM node:22-bookworm

# 基础开发工具
RUN apt update && apt install -y \
    git \
    bash \
    curl \
    build-essential \
    python3 \
    python-is-python3 \
    && rm -rf /var/lib/apt/lists/*

# pnpm
RUN corepack enable

WORKDIR /workspace

CMD ["sleep", "infinity"]
export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start">
      <h3 className=" text-black text-2xl font-semibold mt-8">クイックスタート</h3>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">1. 必要条件</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          続行する前に、最新の安定版{" "}
          <a href="https://nodejs.org/" className="text-primary">
            node.js
          </a>{" "}
          が必要です。
        </p>
        <h6 className="mt-4 mb-2 text-black font-medium text-base">
          推奨環境:
        </h6>
        <ul className="list-disc text-muted text-opacity-60 ps-6">
          <li>node js 20以上</li>
          <li>npm js 10以上</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">2. インストール</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          packageフォルダを開き、依存関係をインストールします。yarnまたはnpmを推奨します。{" "}
        </p>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base">
          1) npmでインストール:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-white/60 mt-2">npm install</p>
        </div>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base">
          1) yarnでインストール:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-white/60 mt-2">yarn install</p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">3. 起動</h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          npm installが完了したら、アプリを起動できます。
        </p>

        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">npm run dev または yarn run dev</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 my-4">
          このコマンドでローカルサーバーが起動します{" "}
          <span className="dark:text-black">http://localhost:3000:</span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">
            {"> paidin_project@2.0.0 dev"}
          </p>
          <p className="text-sm text-white/60 mt-1">{"> next dev"}</p>
          <p className="text-sm text-white/60 mt-6">{"-Next.js 14.2.4"}</p>
          <p className="text-sm text-white/60 mt-1">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium">
          4. ビルド / デプロイ
        </h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          URLを追加したら、以下のコマンドでアプリをビルドします。
        </p>

        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/60">npm run build または yarn build</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 mt-6">
          これでウェブサイトのデプロイ準備が整いました。🥳
        </p>
      </div>
    </div>
  );
};

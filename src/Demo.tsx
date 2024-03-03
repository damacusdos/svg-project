import { Card, Icon } from "./components";

export const Demo = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center h-[100vh]">
      <h1 className="mb-3 font-semibold text-lg">SVG usage example</h1>
      <div className="flex flex-col gap-y-2">
        <Card className="flex gap-x-2">
          <Icon name="arrow-path" className="text-blue-500" />
          This is using the native SVG sprite.
        </Card>
        <Card className="flex gap-x-2">
          <Icon name="arrow-right" className="text-blue-500" />
          This is using the native SVG sprite.
        </Card>
      </div>
    </div>
  );
};

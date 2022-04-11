import * as React from "react";
import { useConnect } from "wagmi";

const Connect = () => {
<<<<<<< HEAD
    const [
        {
            data: { connector, connectors },
            error,
            loading
        },
        connect
    ] = useConnect();

    return (
        <div>
            <div>
                {connectors.map((x) => (
                    <button
                        className="btn"
                        disabled={!x.ready}
                        key={x.name}
                        onClick={() => connect(x)}
                    >
                        {x.name}
                        {!x.ready && " (unsupported)"}
                        {loading && x.name === connector?.name && "…"}
                    </button>
                ))}
            </div>
            <div>{error && (error?.message ?? "Failed to connect")}</div>
        </div>
    );
=======
  const [
    {
      data: { connector, connectors },
      error,
      loading
    },
    connect
  ] = useConnect();

  return (
    <div>
      <div>
        {connectors.map(x => (
          <button
            className="btn"
            disabled={!x.ready}
            key={x.name}
            onClick={() => connect(x)}
          >
            {x.name}
            {!x.ready && " (unsupported)"}
            {loading && x.name === connector?.name && "…"}
          </button>
        ))}
      </div>
      <div>{error && (error?.message ?? "Failed to connect")}</div>
    </div>
  );
>>>>>>> 9e7cdfcea200d8044898da348d966d2fce8e6f33
};

export default Connect;

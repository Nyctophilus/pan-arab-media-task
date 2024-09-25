new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (entry.entryType === "layout-shift") {
      if (!entry.hadRecentInput) {
        const cls = entry.value;

        console.log(`current cls value:`, cls, entry);
      }
    } else if (entry.entryType === "largest-contentful-paint") {
      const el = entry.element;
      console.log(el);
    }
  }
}).observe({ entryTypes: ["layout-shift", "largest-contentful-paint"] });
